import '@testing-library/jest-dom'
import { search } from '../search'
import store from '../store';
import getMovieData from '../API/getMovieData';
import updateSwiper from '../swiper/updateSwiper';
import translate from '../API/translate';

jest.mock('../API/getMovieData', ()=>jest.fn())
jest.mock('../swiper/updateSwiper', ()=>jest.fn())
jest.mock('../store', ()=>({}))
jest.mock('../API/translate', ()=>jest.fn())

beforeEach(()=>{
    for(const prop in store){
        delete store[prop];
    }
    jest.clearAllMocks()
})

function patchStore(fakeStoreObj) {
    for(const prop in fakeStoreObj){
        store[prop] = fakeStoreObj[prop];
    }
}

describe('@search', () => {
    const mockPreventDefault = jest.fn();
    const mockAddEventListener = jest.fn();
    const spyQuerySelector = jest.spyOn(document, 'querySelector')
        .mockImplementation(()=>({addEventListener: mockAddEventListener})) 

    test('check listeners added', async () => {   
        patchStore({ isSearch: false }); 
        expect(search()).toBe(false);
        expect(spyQuerySelector).toHaveBeenNthCalledWith(1, '.search' );
        expect(spyQuerySelector).toHaveBeenNthCalledWith(2, '.reset' );
        expect(mockAddEventListener.mock.calls[0][0]).toBe('click' );
        expect(mockAddEventListener.mock.calls[1][0]).toBe('click' );
    });

    describe('.search click listener', () => {
        test('check russian text flow when total results <= 10', async () => {
            const searchText = 'русские слова';
            const currentPage = 1;
            patchStore({ searchText, currentPage, totalResults: 5 });

            search()
            const searchClickListener = mockAddEventListener.mock.calls[0][1];
            jest.clearAllMocks()

            await searchClickListener({preventDefault: mockPreventDefault})

            expect(translate).toBeCalledWith(searchText);
            expect(getMovieData).toBeCalledTimes(1);
            expect(getMovieData).toBeCalledWith(searchText, currentPage);
            expect(updateSwiper).toBeCalledWith('clean');

            expect(spyQuerySelector).toHaveBeenNthCalledWith(1, '.fa-circle-o-notch' );
            expect(spyQuerySelector).toHaveBeenNthCalledWith(2, '.error__text' );
            // expect(spyQuerySelector).toHaveBeenNthCalledWith(3, '.error__text' );

            expect(store.currentPage).toBe(1);
            expect(store.isSearch).toBe(false);
        });

        test('check case when total results > 10 for english search query', async () => {
            const searchText = 'englishtext';
            const currentPage = 1;
            patchStore({ searchText, currentPage, totalResults: 11 });
        
            search()
            const searchClickListener = mockAddEventListener.mock.calls[0][1];
            jest.clearAllMocks()

            await searchClickListener({preventDefault: mockPreventDefault})
        
            expect(translate).not.toBeCalled();
            expect(getMovieData).toHaveBeenNthCalledWith(1, searchText, currentPage);
            expect(getMovieData).toHaveBeenNthCalledWith(2, searchText, currentPage + 1);
            expect(store.currentPage).toBe(currentPage + 1);
            expect(updateSwiper).toBeCalledWith('clean');

            expect(spyQuerySelector).toHaveBeenNthCalledWith(1, '.fa-circle-o-notch' );
            expect(spyQuerySelector).toHaveBeenNthCalledWith(2, '.error__text' );
        });
    });

    
 
})
