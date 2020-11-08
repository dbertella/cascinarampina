export default {
    mobile: '@media all and (max-width: 768px)',
    tablet: '@media all and (max-width: 1024px)',
    desktop: '@media all and (max-width: 1280px)',
    widescreen: '@media all and (max-width: 1440px)',
    /**
     * @description Dynamic mq. Es. from 320px upwards.
     * @param {string} direction 'max' as convention downwards.
     * 'min' as upwards.
     * @param {number} from As pixels.
     */
    d: (direction, from) => `@media all and (${direction}-width: ${from}px)`
}