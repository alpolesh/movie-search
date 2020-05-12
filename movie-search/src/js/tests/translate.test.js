import translate from "../API/translate";


describe('@translate', () => {
    const mockJson = jest.fn().mockResolvedValue({});
    const mockFetch = jest.fn().mockResolvedValue({ 
        json: mockJson,
    });
    const spyQuerySelector = jest.spyOn(document, 'querySelector').mockImplementation(() => ({}));
    global.fetch = mockFetch;
    test('translate word', async () => {
        const message = 'дом';
        await translate(message)
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(spyQuerySelector).toHaveBeenNthCalledWith(1, '.error__text');
    })
});