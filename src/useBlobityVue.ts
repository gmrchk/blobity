import Blobity, { Options } from './Blobity';
import { onMounted, ref } from 'vue';

export default (options: Partial<Options>) => {
    const instance = ref<Blobity | null>(null)

    onMounted(() => {
        if (!instance.value) {
            instance.value = new Blobity(options)
        }
    })

    return instance.value!
};
