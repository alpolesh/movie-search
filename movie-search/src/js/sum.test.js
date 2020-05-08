import {prob, search} from './search'
import updateSwiper from './swiper/updateSwiper';

test('adds 1 + 2 to equal 3', () => {
    expect(prob(1, 2)).toBe(3);
});

test('swiper always greater than 0', () => {
    expect(updateSwiper()).toBeGreaterThan(0);
});

test('store.isSearch should be false', () => {
    expect(search()).toBe(false);
});