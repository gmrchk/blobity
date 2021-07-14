declare module 'kinet' {
    export default class Kinet {
        constructor(options: {
            names: string[]
            acceleration: number
            friction: number
        }): void
        set(name: string, value: number): void
        animate(name: string, value: number): void
        on(
            event: string,
            handler: (instances: {
                [key: string]: { current: number; velocity: number }
            }) => void
        ): void
        _options: {
            acceleration: number
            friction: number
        }
        _instances: {
            [key: string]: {
                _acceleration: number
                _friction: number
                velocity: number
            }
        }
    }
}
