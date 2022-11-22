let i = 0;
const Gallery = () => {
    const handleGallery = (e) => {
        const imgsEl = document.querySelector(".imgs")
        let srcs = ["./imgs/me.jpg", "./imgs/code.png", "./imgs/hero.jpg", "./imgs/melee.gif", "./imgs/fox.jpg", "./imgs/codewars.png"];
        if (e.target.classList[1] === 'btn-forward') {
            i++;
            if (i >= srcs.length) {
                imgsEl.src = srcs[0]
                i = 0;
            } else {
                imgsEl.src = srcs[i]
            }
        } else {
            i--
            if (i < 0) {
                i = srcs.length - 1;
                imgsEl.src = srcs[srcs.length - 1];
            } else {
                imgsEl.src = srcs[i];
            }
        }
        console.log(i);
        return imgsEl.src;
    }
    return (
            <div className="gallery-container">
                <button onClick={handleGallery} className="gallery-btn btn-backwards">&gt;</button>
                <img className="imgs" src={"./imgs/me.jpg"} />
                <button onClick={handleGallery} className="gallery-btn btn-forward">&lt;</button>
            </div>
    )
}

export default Gallery;