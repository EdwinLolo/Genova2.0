import React, { useState, useEffect } from "react";
import "./styles.scss";
// https://codepen.io/AlexBalaushko/pen/mdepQzo

import Acara from "../../../Assets/Division/Acara.webp";
import BPH from "../../../Assets/Division/BPH.webp";
import Dekorasi from "../../../Assets/Division/Dekorasi.webp";
import Dokumentasi from "../../../Assets/Division/Dokumentasi.webp";
import FreshMoney from "../../../Assets/Division/FreshMoney.webp";
import Konsumsi from "../../../Assets/Division/Konsumsi.webp";
import Lomba from "../../../Assets/Division/Lomba.webp";
import Perlengkapan from "../../../Assets/Division/Perlengkapan.webp";
import Publikasi from "../../../Assets/Division/Publikasi.webp";
import Sponsor from "../../../Assets/Division/Sponsor.webp";
import Ticketing from "../../../Assets/Division/Ticketing.webp";
import Visual from "../../../Assets/Division/Visual.webp";
import Website from "../../../Assets/Division/Website.webp";

const App = () => {
    const [carouselDeg, setCarouselDeg] = useState(17);
    const [itemDeg, setItemDeg] = useState(-17);
    const [centerItem, setCenterItem] = useState(0);
    const [prevItem, setPrevItem] = useState(12);
    const [nextItem, setNextItem] = useState(1);
    const [lastItem] = useState(12);

    const [carousel] = useState([
        { name: Acara, id: 0, position: 1 },
        { name: BPH, id: 1, position: 2 },
        { name: Dekorasi, id: 2, position: 3 },
        { name: Dokumentasi, id: 3, position: 4 },
        { name: FreshMoney, id: 4, position: 5 },
        { name: Konsumsi, id: 5, position: 6 },
        { name: Lomba, id: 6, position: 7 },
        { name: Perlengkapan, id: 7, position: 8 },
        { name: Publikasi, id: 8, position: 9 },
        { name: Sponsor, id: 9, position: 10 },
        { name: Ticketing, id: 10, position: 11 },
        { name: Visual, id: 11, position: 12 },
        { name: Website, id: 12, position: 13 },
    ]);

    const prevNext = (itemId) => {
        if (itemId === lastItem) {
            setNextItem(0);
            setPrevItem(lastItem - 1);
        } else if (itemId === 0) {
            setPrevItem(lastItem);
            setNextItem(1);
        } else {
            setNextItem(itemId + 1);
            setPrevItem(itemId - 1);
        }
    };

    const getIdItems = (side) => {
        if (side) {
            setCenterItem(nextItem);
            prevNext(nextItem);
        } else {
            setCenterItem(prevItem);
            prevNext(prevItem);
        }
    };

    const next = () => {
        getIdItems(true);
        setCarouselDeg((prev) => prev - 27.69);
        setItemDeg((prev) => prev + 27.69);
    };

    const prev = () => {
        getIdItems(false);
        setCarouselDeg((prev) => prev + 27.69);
        setItemDeg((prev) => prev - 27.69);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [carouselDeg, itemDeg]);

    const getCssClass = (id) => {
        if (id === centerItem) {
            return "active";
        } else if (id === nextItem) {
            return "next";
        } else if (id === prevItem) {
            return "prev";
        }
        return "";
    };

    return (
        <div className="pembungkusrangkaianhome">
            <div className="lg:mt-[100px] xl:mt-[200px] mt-36 App">
                {/* <button onClick={next}>Next</button>
                <button onClick={prev}>Prev</button> */}
                <div className="test" />
                <div
                    className="carousel"
                    style={{ transform: `rotate(${carouselDeg}deg)` }}
                >
                    {carousel.map((item, index) => (
                        // <div>
                        <div
                            className={`item-carousel ${getCssClass(index)}`}
                            key={item.id}
                            id={item.id}
                            style={{ transform: `rotate(${itemDeg}deg)` }}
                        >
                            <img
                                className="gambar"
                                src={item.name}
                                alt={`Image ${item.id}`}
                            />
                        </div>
                        // </div>
                    ))}
                    <div className="active-item">
                        {carousel.map((item, index) => {
                            if (index === centerItem) {
                                return (
                                    <div
                                        key={item.id}
                                        className="gambar1 "
                                        style={{
                                            transform: `rotate(${itemDeg}deg)`,
                                        }}
                                    >
                                        <img
                                            className="gambar2"
                                            src={item.name}
                                            alt={`Image ${item.id}`}
                                        />
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
