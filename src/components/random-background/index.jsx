//
export const RandomBackground = () => {

    const unsplashTopics = ['history', 'fox', 'mountain', 'mount', 'caves', 'zen', 'renascentista'];

    const background = `body{background-image: url("https://source.unsplash.com/random/${unsplashTopics}?&1");}`
    return (
        <>
            <style>{background}</style>
        </>
    );
}