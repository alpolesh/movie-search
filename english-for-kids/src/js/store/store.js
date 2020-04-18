

const store = {
    currentRoute: 'Main Page', // 'Main Page' / 'Action (set A)' / ...
    mode: 'train', // 'train' / 'play'
    isGameStarted: false,
    routes: [
        {
            categoryName: 'Main Page',
            content: []
        },
        {
            categoryName: 'Statistics',
            content: []
        }
    ],
    statistics: []
}



export default store;