import Kinet from 'kinet';
import throttle from 'lodash/throttle';

export default class Magnetic {
    private readonly kinetInstance: Kinet;
    private readonly throttledMouseMove: (event: MouseEvent) => void;
    private readonly element: HTMLElement;
    private rect: DOMRect;
    private center: { x: number; y: number };
    private maxDistanceX: number;
    private maxDistanceY: number;
    private destroying: boolean = false;
    public onTick: (() => void) | null = null;

    constructor(element: HTMLElement) {
        this.kinetInstance = new Kinet({
            names: ['x', 'y'],
            acceleration: 0.1,
            friction: 0.4,
        });

        this.element = element;
        this.rect = this.element.getBoundingClientRect();

        this.center = {
            x: this.rect.x + window.scrollX + this.element.offsetWidth / 2,
            y: this.rect.y + window.scrollY + this.element.offsetHeight / 2,
        };

        this.maxDistanceX = this.element.offsetWidth / 2;
        this.maxDistanceY = this.element.offsetWidth / 2;

        this.throttledMouseMove = throttle(this.mouseMove);
        window.addEventListener('mousemove', this.throttledMouseMove, {
            passive: true,
        });

        this.kinetInstance.on('tick', (instances) => {
            this.element.style.transform = `translate3d(${
                instances.x.current
            }px, ${instances.y.current}px, 0) rotateY(${
                instances.x.current / 2
            }deg) rotateX(${instances.y.current / 2}deg)`;
            this.onTick && this.onTick();
        });

        this.kinetInstance.on('end', () => {
            if (this.destroying) {
                this.element.style.transform = '';
            }
        });

        // this is so the transform takes effect, but we don't want to break any possible existing styling
        if (
            !element.style.hasOwnProperty('display') ||
            element.style.display === ''
        ) {
            element.style.display = 'inline-block';
        }
    }

    public destroy = () => {
        window.removeEventListener('mousemove', this.throttledMouseMove);

        this.destroying = true;

        this.kinetInstance.animate('x', 0);
        this.kinetInstance.animate('y', 0);
    };

    private mouseMove = (event: MouseEvent) => {
        let distance = this.getDistance(
            event.clientX + window.scrollX,
            event.clientY + window.scrollY
        );
        this.render(
            distance,
            -1 * (this.center.x - event.clientX - window.scrollX),
            -1 * (this.center.y - event.clientY - window.scrollY)
        );
    };

    private getDistance(x: number, y: number) {
        return Math.round(
            Math.sqrt(
                Math.pow(this.center.x - x, 2) + Math.pow(this.center.y - y, 2)
            )
        );
    }

    render(distance: number, x: number, y: number) {
        if (
            Math.abs(x) < this.maxDistanceX &&
            Math.abs(y) < this.maxDistanceY
        ) {
            const percentX = x / this.maxDistanceX;
            const percentY = y / this.maxDistanceY;

            this.kinetInstance.animate('x', Math.round(20 * percentX));
            this.kinetInstance.animate('y', Math.round(20 * percentY));
        } else {
            this.kinetInstance.animate('x', 0);
            this.kinetInstance.animate('y', 0);
        }
    }
}
