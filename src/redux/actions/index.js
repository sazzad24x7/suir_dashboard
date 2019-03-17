export  const handleShowClick = (buttonState) =>{
    return ({type: 'Button_Show_Hide' , payload: buttonState })};

export const getNews = () => ({
    type: 'GET_NEWS',
});