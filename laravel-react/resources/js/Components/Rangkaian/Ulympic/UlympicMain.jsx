import React, { useState, useEffect } from "react";
import LogoUlympicPNG from "../../../Assets/Rangkaian/Ulympic/Ulympic_Asset_Logo.webp";
import LogoCardUlympicPNG from "../../../Assets/Rangkaian/Ulympic/Ulympic_Asset_LogoCard.webp";
import MainUlympicPNG from "../../../Assets/Rangkaian/Ulympic/Ulympic_Asset_Main.webp";
import PCLogoUlympicPNG from "../../../Assets/Rangkaian/Ulympic/Ulympic_Asset_Logo_PC.webp";
import PCMainUlympicPNG from "../../../Assets/Rangkaian/Ulympic/Ulympic_Asset_Main_PC.webp";
import PCCardUlympicPNG from "../../../Assets/Rangkaian/Ulympic/Ulympic_Asset_Card_PC.webp";
import "../../Font.css";
import "./UlympicMain.css";

function UlympicMain() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isWideScreen = windowWidth <= 1024;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isWideScreen) {
        return (
            <div>
                <div className="relative w-full">
                    <img
                        className="w-full"
                        src={LogoUlympicPNG}
                        alt="Logo Ulympic"
                    />
                </div>
                <div className="relative w-full text-center">
                    <img
                        className="w-full MainUnifyPNG"
                        src={MainUlympicPNG}
                        alt="Main Ulympic"
                    />
                    <div className="info">
                        <h1 style={{ fontFamily: "Akbaal, sans-serif" }}>
                            Ulympic
                        </h1>
                        <p
                            style={{
                                fontFamily: "SanFran-Regular, sans-serif",
                            }}
                        >
                            𝐔𝐋𝐘𝐌𝐏𝐈𝐂 adalah rangkaian perlombaan kedua sekaligus
                            penutup perlombaan pada rangkaian kegiatan UMN
                            Festival 2024. Akan mempertandingkan turnamen
                            Futsal, Basket, Voli dan Badminton yang
                            diselenggarakan untuk internal maupun eksternal UMN.
                            <br />
                            <br />
                            𝐔𝐋𝐘𝐌𝐏𝐈𝐂 juga akan dilalui bagi #Legions untuk meraih
                            kemenangan, dalam tahap ini akan dipenuhi dengan
                            tantangan yang memerlukan keberanian (Valiant) untuk
                            bertarung serta kegigihan (Persistence) dari para
                            #Legions dalam menghadapi pertarungan yang ajaib dan
                            penuh dengan kegembiraan!
                            <br />
                            <br />
                            "Join us as we forged ahead, conquering with a
                            valiant spirit and embracing the magical revelry!"
                            <br />
                            <br />
                        </p>
                        <div className="cardcontainersm">
                            <div className="card">
                                <div className="flip-card">
                                    <div className="flip-card__container">
                                        <div className="card-front">
                                            <div className="card-front__tp card-front__tp--city">
                                                <svg
                                                    width="96"
                                                    height="96"
                                                    viewBox="0 0 96 96"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M48 0C21.4957 0 0 21.4957 0 48C0 74.5043 21.4957 96 48 96C74.5043 96 96 74.5043 96 48C96 21.4957 74.5043 0 48 0ZM78.2609 73.5652C75.5478 71.0609 71.0609 65.8435 69.3913 57.8087C77.5304 56.6609 83.3739 54.9913 87.2348 53.6348C86.1913 61.0435 82.9565 67.9304 78.2609 73.5652ZM8.76522 53.5304C12.6261 54.887 18.4696 56.5565 26.6087 57.7043C25.0435 65.7391 20.4522 71.0609 17.7391 73.4609C13.0435 67.9304 9.8087 61.0435 8.76522 53.5304ZM15.3391 25.4609C18.6783 29.0087 25.8783 37.9826 26.9217 49.3565C16.8 47.7913 10.8522 45.4957 8.45217 44.4522C9.18261 37.4609 11.5826 30.9913 15.3391 25.4609ZM87.4435 44.4522C85.0435 45.4957 79.2 47.8957 68.9739 49.3565C70.0174 38.087 77.3217 29.0087 80.5565 25.4609C84.4174 30.9913 86.8174 37.4609 87.4435 44.4522ZM60.6261 50.2957C58.0174 50.5043 55.2 50.6087 52.1739 50.713V8.55652C61.0435 9.49565 68.9739 13.3565 75.1304 19.0957C71.2696 23.1652 61.2522 34.9565 60.6261 50.2957ZM43.8261 50.8174C40.8 50.713 37.9826 50.6087 35.3739 50.4C34.6435 34.9565 24.6261 23.2696 20.7652 19.2C26.9217 13.4609 34.8522 9.6 43.7217 8.66087V50.8174H43.8261ZM34.8522 58.6435C37.6696 58.8522 40.5913 59.0609 43.8261 59.0609V87.3391C36.313 86.6087 29.4261 83.687 23.687 79.3043C27.4435 75.7565 33.0783 68.9739 34.8522 58.6435ZM52.1739 59.1652C55.3043 59.0609 58.3304 58.9565 61.1478 58.7478C63.0261 68.9739 68.5565 75.8609 72.313 79.4087C66.6783 83.7913 59.687 86.713 52.1739 87.5478V59.1652Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                                <h2 className="card-front__heading">
                                                    Basket
                                                </h2>
                                            </div>

                                            <div className="card-front__bt">
                                                <p className="card-front__text-view card-front__text-view--city">
                                                    Daftar!
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="card-back"
                                            style={{
                                                background:
                                                    "-webkit-radial-gradient(circle, hsla(58, 100%, 68%, 1) 0%, hsla(33, 100%, 53%, 1) 100%)",
                                            }}
                                        >
                                            <img
                                                className="w-full"
                                                src={LogoCardUlympicPNG}
                                                alt="Logo Card Ulympic"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="inside-page">
                                    <div className="inside-page__container">
                                        <h3 className="inside-page__heading inside-page__heading--city">
                                            Basket
                                        </h3>
                                        <p className="inside-page__text">
                                            Sudah siap untuk dunk di lapangan?
                                            Ayo tunjukkan skill terbaikmu di
                                            Ulympic!
                                        </p>
                                        <a
                                            href="/rangkaian/ulympic/basket"
                                            className="inside-page__btn inside-page__btn--city"
                                        >
                                            Registrasi
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="flip-card">
                                    <div className="flip-card__container">
                                        <div className="card-front">
                                            <div className="card-front__tp card-front__tp--ski">
                                                <svg
                                                    width="96"
                                                    height="96"
                                                    viewBox="0 0 96 96"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M93.4438 40.8616L38.1072 11.5673L32.0316 5.49181C24.7184 -1.8306 12.8016 -1.8306 5.48842 5.49181C-1.82947 12.8095 -1.82947 24.7167 5.48842 32.0344L11.564 38.1098L40.859 93.4451C41.5716 94.7905 42.8795 95.7187 44.3891 95.9484C44.6281 95.9812 44.8625 96 45.1016 96C46.3674 96 47.5909 95.5031 48.4957 94.5936L94.5923 48.4981C95.6706 47.4199 96.1722 45.8963 95.9472 44.3915C95.7175 42.882 94.7892 41.5741 93.4438 40.8616ZM12.2766 12.2798C14.0627 10.4937 16.4114 9.59836 18.76 9.59836C21.1087 9.59836 23.4573 10.4937 25.2435 12.2798L28.436 15.4722L15.4691 28.4388L12.2766 25.2464C8.70436 21.6696 8.70436 15.8566 12.2766 12.2798ZM46.3017 83.2116L21.3712 36.1128L21.6967 35.7873L47.9753 67.8964C48.9223 69.059 50.3006 69.659 51.6929 69.659C52.7617 69.659 53.8353 69.3027 54.726 68.5714C56.7793 66.8932 57.084 63.8695 55.4057 61.8209L28.5171 28.9671L28.9642 28.52L61.8189 55.408C62.7096 56.1346 63.7831 56.4909 64.852 56.4909C66.2443 56.4909 67.6226 55.8908 68.5695 54.7282C70.2525 52.6796 69.9478 49.656 67.8945 47.9777L35.7846 21.6997L36.1101 21.3742L83.21 46.3042L46.3017 83.2116Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                                <h2 className="card-front__heading">
                                                    Badminton
                                                </h2>
                                            </div>

                                            <div className="card-front__bt">
                                                <p className="card-front__text-view card-front__text-view--ski">
                                                    Closed
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className="card-back"
                                            style={{
                                                background:
                                                    "-webkit-radial-gradient(circle, hsla(58, 100%, 68%, 1) 0%, hsla(33, 100%, 53%, 1) 100%)",
                                            }}
                                        >
                                            <img
                                                className="w-full"
                                                src={LogoCardUlympicPNG}
                                                alt="Logo Card Ulympic"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="inside-page">
                                    <div className="inside-page__container">
                                        <h3 className="inside-page__heading inside-page__heading--ski">
                                            Badminton
                                        </h3>
                                        <p className="inside-page__text">
                                            Raih kemenangan dengan smash
                                            terkuatmu! Ayo daftar dalam Ulympic
                                            sekarang!
                                        </p>
                                        {/* <a
                                            href="/rangkaian/ulympic/badminton"
                                            className="inside-page__btn inside-page__btn--ski"
                                        >
                                            Registrasi
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}

                            {/* <div className="cardcont2"> */}
                            <div className="card">
                                <div className="flip-card">
                                    <div className="flip-card__container">
                                        <div className="card-front">
                                            <div className="card-front__tp card-front__tp--beach">
                                                <svg
                                                    width="96"
                                                    height="96"
                                                    viewBox="0 0 96 96"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clip-path="url(#clip0_31_7)">
                                                        <path
                                                            d="M93.6401 33.1742C87.0593 12.8903 68.2458 0 48.0194 0C43.1031 0 38.1094 0.754839 33.1737 2.36129C7.97294 10.5484 -5.8275 37.6258 2.35986 62.8258C8.94071 83.1097 27.7542 96 47.9806 96C52.8969 96 57.8906 95.2452 62.8263 93.6387C88.0271 85.4516 101.828 58.3742 93.6401 33.1742ZM79.2203 70.6645L69.1168 71.9032L60.6585 60.1161L65.3812 45.5613L79.1429 41.2839L86.6722 48.329C86.6335 54.271 85.2399 60.1548 82.4721 65.5935C81.5624 67.3935 80.401 69.0387 79.2203 70.6645ZM79.2203 25.1032L77.2074 35.3806L63.5231 39.6387L51.0969 30.6387V16.3548L60.2714 11.2839C67.8587 13.8 74.4783 18.6387 79.2203 25.1032ZM35.7867 11.3032L44.9031 16.3548V30.6387L32.4769 39.6387L18.812 35.3806L16.8571 25.2194C21.5605 18.7548 28.0639 13.8774 35.7867 11.3032ZM26.9026 71.9032L16.6248 70.6452C13.8376 66.7548 9.40524 59.1097 9.30846 48.329L16.8571 41.2839L30.6188 45.5806L35.3222 59.9613L26.9026 71.9032ZM36.2319 84.871L31.8963 75.5613L40.3352 63.6194H55.5486L64.1231 75.5613L59.7875 84.871C58.5874 85.2194 48.6387 88.8194 36.2319 84.871Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_31_7">
                                                            <rect
                                                                width="96"
                                                                height="96"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                                <h2 className="card-front__heading">
                                                    Futsal
                                                </h2>
                                            </div>

                                            <div className="card-front__bt">
                                                <p className="card-front__text-view card-front__text-view--ski">
                                                    Closed
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="card-back"
                                            style={{
                                                background:
                                                    "-webkit-radial-gradient(circle, hsla(58, 100%, 68%, 1) 0%, hsla(33, 100%, 53%, 1) 100%)",
                                            }}
                                        >
                                            <img
                                                className="w-full"
                                                src={LogoCardUlympicPNG}
                                                alt="Logo Card Ulympic"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="inside-page">
                                    <div className="inside-page__container">
                                        <h3 className="inside-page__heading inside-page__heading--beach">
                                            Futsal
                                        </h3>
                                        <p className="inside-page__text">
                                            Daftarkan timmu dalam Ulympic dan
                                            tunjukkan skill kalian!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="flip-card">
                                    <div className="flip-card__container">
                                        <div className="card-front">
                                            <div className="card-front__tp card-front__tp--camping">
                                                <svg
                                                    width="96"
                                                    height="96"
                                                    viewBox="0 0 96 96"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M95.9487 45.7657C95.9537 45.6191 95.9367 45.4807 95.9282 45.3341C95.5055 37.6127 93.2328 29.9957 89.1088 23.1695C89.0865 23.1137 89.0413 23.0686 89.017 23.0138C87.0682 19.8153 84.7621 16.7751 81.9978 14.0123C79.2373 11.2533 76.1996 8.95108 73.0037 7.00512C72.9439 6.97844 72.8943 6.92889 72.8333 6.90455C54.3562 -4.24139 29.9514 -1.90724 14.0233 14.0123C-1.90988 29.9368 -4.24501 54.3245 6.91227 72.7927C6.93457 72.8484 6.97974 72.8936 7.00409 72.9484C8.95287 76.1469 11.259 79.1871 14.0233 81.9499C16.7861 84.7113 19.8271 87.0152 23.0261 88.9629C23.0827 88.9882 23.1288 89.0345 23.186 89.0573C30.018 93.18 37.6427 95.4523 45.37 95.8742C45.4586 95.8792 45.5422 95.9249 45.6308 95.9249C45.6845 95.9249 45.7352 95.8959 45.7889 95.8942C46.5297 95.9282 47.2692 96 48.0105 96C60.3175 96 72.6291 91.3135 81.9978 81.9499C91.9321 72.021 96.5457 58.7954 95.9487 45.7657ZM43.8123 86.1459C40.1236 85.7442 36.4877 84.8104 33.0194 83.3473L83.3959 32.9981C84.8598 36.4645 85.7941 40.0985 86.196 43.7851L43.8123 86.1459ZM20.8198 75.1571C19.6657 74.0037 18.6319 72.7784 17.6556 71.522L71.5645 17.6424C72.8216 18.6181 74.0472 19.6517 75.2013 20.8051C76.3553 21.9585 77.3894 23.1835 78.3657 24.4399L24.4568 78.3195C23.1998 77.3438 21.9738 76.3105 20.8198 75.1571ZM9.73437 44.6562L20.3387 55.2548L12.6251 62.9641C10.1688 57.148 9.20046 50.8533 9.73437 44.6562ZM34.9995 12.9474L48.8343 26.7746L41.6244 33.9806L24.9277 17.2967C27.8803 15.0757 31.0709 13.3268 34.4152 12.0678C34.6029 12.366 34.7396 12.6876 34.9995 12.9474ZM63.0026 12.614L55.6308 19.9818L45.3357 9.69229C46.2266 9.63071 47.1178 9.56504 48.0105 9.56504C53.1199 9.56504 58.2217 10.5965 63.0026 12.614ZM18.0053 23.9637L34.8279 40.7734L27.1352 48.4619L12.3326 33.6674C13.7067 30.2317 15.6009 26.9602 18.0053 23.9637ZM75.2013 75.1571C70.4383 79.9175 64.7228 83.152 58.6641 84.8878L84.9372 58.6289C83.2006 64.6843 79.9642 70.3967 75.2013 75.1571Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                                <h2 className="card-front__heading">
                                                    Voli
                                                </h2>
                                            </div>

                                            <div className="card-front__bt">
                                                <p className="card-front__text-view card-front__text-view--camping">
                                                    Daftar!
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="card-back"
                                            style={{
                                                background:
                                                    "-webkit-radial-gradient(circle, hsla(58, 100%, 68%, 1) 0%, hsla(33, 100%, 53%, 1) 100%)",
                                            }}
                                        >
                                            <img
                                                className="w-full"
                                                src={LogoCardUlympicPNG}
                                                alt="Logo Card Ulympic"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="inside-page">
                                    <div className="inside-page__container">
                                        <h3 className="inside-page__heading inside-page__heading--camping">
                                            Voli
                                        </h3>
                                        <p className="inside-page__text">
                                            Daftar dan spike bola menuju juara
                                            di Ulympic!
                                        </p>
                                        <a
                                            href="/rangkaian/ulympic/voli"
                                            className="inside-page__btn inside-page__btn--camping"
                                        >
                                            Registrasi
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="bungkus">
                <div className="cont">
                    <div className="PCLogo">
                        <img src={PCLogoUlympicPNG} alt="Logo Ulympic" />
                    </div>
                    <div className="PCMain">
                        <img src={PCMainUlympicPNG} alt="Main Ulympic" />
                        <div className="infoPC">
                            <h1 style={{ fontFamily: "Akbaal, sans-serif" }}>
                                Ulympic
                            </h1>
                            <p
                                style={{
                                    fontFamily: "SanFran-Regular, sans-serif",
                                }}
                            >
                                𝐔𝐋𝐘𝐌𝐏𝐈𝐂 adalah rangkaian perlombaan kedua
                                sekaligus penutup perlombaan pada rangkaian
                                kegiatan UMN Festival 2024. Akan
                                mempertandingkan turnamen Futsal, Basket, Voli
                                dan Badminton yang diselenggarakan untuk
                                internal maupun eksternal UMN.
                                <br />
                                <br />
                                𝐔𝐋𝐘𝐌𝐏𝐈𝐂 juga akan dilalui bagi #Legions untuk
                                meraih kemenangan, dalam tahap ini akan dipenuhi
                                dengan tantangan yang memerlukan keberanian
                                (Valiant) untuk bertarung serta kegigihan
                                (Persistence) dari para #Legions dalam
                                menghadapi pertarungan yang ajaib dan penuh
                                dengan kegembiraan!
                                <br />
                                <br />
                                "Join us as we forged ahead, conquering with a
                                valiant spirit and embracing the magical
                                revelry!"
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full cardcont"
                    style={{ backgroundImage: `url(${PCCardUlympicPNG})` }}
                >
                    {/* <div className="cardcont1"> */}
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--city">
                                        <svg
                                            width="96"
                                            height="96"
                                            viewBox="0 0 96 96"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M48 0C21.4957 0 0 21.4957 0 48C0 74.5043 21.4957 96 48 96C74.5043 96 96 74.5043 96 48C96 21.4957 74.5043 0 48 0ZM78.2609 73.5652C75.5478 71.0609 71.0609 65.8435 69.3913 57.8087C77.5304 56.6609 83.3739 54.9913 87.2348 53.6348C86.1913 61.0435 82.9565 67.9304 78.2609 73.5652ZM8.76522 53.5304C12.6261 54.887 18.4696 56.5565 26.6087 57.7043C25.0435 65.7391 20.4522 71.0609 17.7391 73.4609C13.0435 67.9304 9.8087 61.0435 8.76522 53.5304ZM15.3391 25.4609C18.6783 29.0087 25.8783 37.9826 26.9217 49.3565C16.8 47.7913 10.8522 45.4957 8.45217 44.4522C9.18261 37.4609 11.5826 30.9913 15.3391 25.4609ZM87.4435 44.4522C85.0435 45.4957 79.2 47.8957 68.9739 49.3565C70.0174 38.087 77.3217 29.0087 80.5565 25.4609C84.4174 30.9913 86.8174 37.4609 87.4435 44.4522ZM60.6261 50.2957C58.0174 50.5043 55.2 50.6087 52.1739 50.713V8.55652C61.0435 9.49565 68.9739 13.3565 75.1304 19.0957C71.2696 23.1652 61.2522 34.9565 60.6261 50.2957ZM43.8261 50.8174C40.8 50.713 37.9826 50.6087 35.3739 50.4C34.6435 34.9565 24.6261 23.2696 20.7652 19.2C26.9217 13.4609 34.8522 9.6 43.7217 8.66087V50.8174H43.8261ZM34.8522 58.6435C37.6696 58.8522 40.5913 59.0609 43.8261 59.0609V87.3391C36.313 86.6087 29.4261 83.687 23.687 79.3043C27.4435 75.7565 33.0783 68.9739 34.8522 58.6435ZM52.1739 59.1652C55.3043 59.0609 58.3304 58.9565 61.1478 58.7478C63.0261 68.9739 68.5565 75.8609 72.313 79.4087C66.6783 83.7913 59.687 86.713 52.1739 87.5478V59.1652Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <h2 className="card-front__heading">
                                            Basket
                                        </h2>
                                    </div>

                                    <div className="card-front__bt">
                                        <p className="card-front__text-view card-front__text-view--city">
                                            Daftar!
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="card-back"
                                    style={{
                                        background:
                                            "-webkit-radial-gradient(circle, hsla(58, 100%, 68%, 1) 0%, hsla(33, 100%, 53%, 1) 100%)",
                                    }}
                                >
                                    <img
                                        className="w-full"
                                        src={LogoCardUlympicPNG}
                                        alt="Logo Card Ulympic"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="inside-page">
                            <div className="inside-page__container">
                                <h3 className="inside-page__heading inside-page__heading--city">
                                    Basket
                                </h3>
                                <p className="inside-page__text">
                                    Sudah siap untuk dunk di lapangan? Ayo
                                    tunjukkan skill terbaikmu di Ulympic!
                                </p>
                                <a
                                    href="/rangkaian/ulympic/basket"
                                    className="inside-page__btn inside-page__btn--city"
                                    target="_blank"
                                >
                                    Registrasi
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--ski">
                                        <svg
                                            width="96"
                                            height="96"
                                            viewBox="0 0 96 96"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M93.4438 40.8616L38.1072 11.5673L32.0316 5.49181C24.7184 -1.8306 12.8016 -1.8306 5.48842 5.49181C-1.82947 12.8095 -1.82947 24.7167 5.48842 32.0344L11.564 38.1098L40.859 93.4451C41.5716 94.7905 42.8795 95.7187 44.3891 95.9484C44.6281 95.9812 44.8625 96 45.1016 96C46.3674 96 47.5909 95.5031 48.4957 94.5936L94.5923 48.4981C95.6706 47.4199 96.1722 45.8963 95.9472 44.3915C95.7175 42.882 94.7892 41.5741 93.4438 40.8616ZM12.2766 12.2798C14.0627 10.4937 16.4114 9.59836 18.76 9.59836C21.1087 9.59836 23.4573 10.4937 25.2435 12.2798L28.436 15.4722L15.4691 28.4388L12.2766 25.2464C8.70436 21.6696 8.70436 15.8566 12.2766 12.2798ZM46.3017 83.2116L21.3712 36.1128L21.6967 35.7873L47.9753 67.8964C48.9223 69.059 50.3006 69.659 51.6929 69.659C52.7617 69.659 53.8353 69.3027 54.726 68.5714C56.7793 66.8932 57.084 63.8695 55.4057 61.8209L28.5171 28.9671L28.9642 28.52L61.8189 55.408C62.7096 56.1346 63.7831 56.4909 64.852 56.4909C66.2443 56.4909 67.6226 55.8908 68.5695 54.7282C70.2525 52.6796 69.9478 49.656 67.8945 47.9777L35.7846 21.6997L36.1101 21.3742L83.21 46.3042L46.3017 83.2116Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <h2 className="card-front__heading">
                                            Badminton
                                        </h2>
                                    </div>

                                    <div className="card-front__bt">
                                        <p className="card-front__text-view card-front__text-view--ski">
                                            Closed
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="card-back"
                                    style={{
                                        background:
                                            "-webkit-radial-gradient(circle, hsla(58, 100%, 68%, 1) 0%, hsla(33, 100%, 53%, 1) 100%)",
                                    }}
                                >
                                    <img
                                        className="w-full"
                                        src={LogoCardUlympicPNG}
                                        alt="Logo Card Ulympic"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="inside-page">
                            <div className="inside-page__container">
                                <h3 className="inside-page__heading inside-page__heading--ski">
                                    Badminton
                                </h3>
                                <p className="inside-page__text">
                                    Raih kemenangan dengan smash terkuatmu! Ayo
                                    daftar dalam Ulympic sekarang!
                                </p>
                                {/* <a
                                    href="/rangkaian/ulympic/badminton"
                                    className="inside-page__btn inside-page__btn--ski"
                                    target="_blank"
                                >
                                    Registrasi
                                </a> */}
                            </div>
                        </div>
                    </div>
                    {/* </div> */}

                    {/* <div className="cardcont2"> */}
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--beach">
                                        <svg
                                            width="96"
                                            height="96"
                                            viewBox="0 0 96 96"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_31_7)">
                                                <path
                                                    d="M93.6401 33.1742C87.0593 12.8903 68.2458 0 48.0194 0C43.1031 0 38.1094 0.754839 33.1737 2.36129C7.97294 10.5484 -5.8275 37.6258 2.35986 62.8258C8.94071 83.1097 27.7542 96 47.9806 96C52.8969 96 57.8906 95.2452 62.8263 93.6387C88.0271 85.4516 101.828 58.3742 93.6401 33.1742ZM79.2203 70.6645L69.1168 71.9032L60.6585 60.1161L65.3812 45.5613L79.1429 41.2839L86.6722 48.329C86.6335 54.271 85.2399 60.1548 82.4721 65.5935C81.5624 67.3935 80.401 69.0387 79.2203 70.6645ZM79.2203 25.1032L77.2074 35.3806L63.5231 39.6387L51.0969 30.6387V16.3548L60.2714 11.2839C67.8587 13.8 74.4783 18.6387 79.2203 25.1032ZM35.7867 11.3032L44.9031 16.3548V30.6387L32.4769 39.6387L18.812 35.3806L16.8571 25.2194C21.5605 18.7548 28.0639 13.8774 35.7867 11.3032ZM26.9026 71.9032L16.6248 70.6452C13.8376 66.7548 9.40524 59.1097 9.30846 48.329L16.8571 41.2839L30.6188 45.5806L35.3222 59.9613L26.9026 71.9032ZM36.2319 84.871L31.8963 75.5613L40.3352 63.6194H55.5486L64.1231 75.5613L59.7875 84.871C58.5874 85.2194 48.6387 88.8194 36.2319 84.871Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_31_7">
                                                    <rect
                                                        width="96"
                                                        height="96"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <h2 className="card-front__heading">
                                            Futsal
                                        </h2>
                                    </div>

                                    <div className="card-front__bt">
                                        <p className="card-front__text-view card-front__text-view--ski">
                                            Closed
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="card-back"
                                    style={{
                                        background:
                                            "-webkit-radial-gradient(circle, hsla(58, 100%, 68%, 1) 0%, hsla(33, 100%, 53%, 1) 100%)",
                                    }}
                                >
                                    <img
                                        className="w-full"
                                        src={LogoCardUlympicPNG}
                                        alt="Logo Card Ulympic"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="inside-page">
                            <div className="inside-page__container">
                                <h3 className="inside-page__heading inside-page__heading--beach">
                                    Futsal
                                </h3>
                                <p className="inside-page__text">
                                    Daftarkan timmu dalam Ulympic dan tunjukkan
                                    skill kalian!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--camping">
                                        <svg
                                            width="96"
                                            height="96"
                                            viewBox="0 0 96 96"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M95.9487 45.7657C95.9537 45.6191 95.9367 45.4807 95.9282 45.3341C95.5055 37.6127 93.2328 29.9957 89.1088 23.1695C89.0865 23.1137 89.0413 23.0686 89.017 23.0138C87.0682 19.8153 84.7621 16.7751 81.9978 14.0123C79.2373 11.2533 76.1996 8.95108 73.0037 7.00512C72.9439 6.97844 72.8943 6.92889 72.8333 6.90455C54.3562 -4.24139 29.9514 -1.90724 14.0233 14.0123C-1.90988 29.9368 -4.24501 54.3245 6.91227 72.7927C6.93457 72.8484 6.97974 72.8936 7.00409 72.9484C8.95287 76.1469 11.259 79.1871 14.0233 81.9499C16.7861 84.7113 19.8271 87.0152 23.0261 88.9629C23.0827 88.9882 23.1288 89.0345 23.186 89.0573C30.018 93.18 37.6427 95.4523 45.37 95.8742C45.4586 95.8792 45.5422 95.9249 45.6308 95.9249C45.6845 95.9249 45.7352 95.8959 45.7889 95.8942C46.5297 95.9282 47.2692 96 48.0105 96C60.3175 96 72.6291 91.3135 81.9978 81.9499C91.9321 72.021 96.5457 58.7954 95.9487 45.7657ZM43.8123 86.1459C40.1236 85.7442 36.4877 84.8104 33.0194 83.3473L83.3959 32.9981C84.8598 36.4645 85.7941 40.0985 86.196 43.7851L43.8123 86.1459ZM20.8198 75.1571C19.6657 74.0037 18.6319 72.7784 17.6556 71.522L71.5645 17.6424C72.8216 18.6181 74.0472 19.6517 75.2013 20.8051C76.3553 21.9585 77.3894 23.1835 78.3657 24.4399L24.4568 78.3195C23.1998 77.3438 21.9738 76.3105 20.8198 75.1571ZM9.73437 44.6562L20.3387 55.2548L12.6251 62.9641C10.1688 57.148 9.20046 50.8533 9.73437 44.6562ZM34.9995 12.9474L48.8343 26.7746L41.6244 33.9806L24.9277 17.2967C27.8803 15.0757 31.0709 13.3268 34.4152 12.0678C34.6029 12.366 34.7396 12.6876 34.9995 12.9474ZM63.0026 12.614L55.6308 19.9818L45.3357 9.69229C46.2266 9.63071 47.1178 9.56504 48.0105 9.56504C53.1199 9.56504 58.2217 10.5965 63.0026 12.614ZM18.0053 23.9637L34.8279 40.7734L27.1352 48.4619L12.3326 33.6674C13.7067 30.2317 15.6009 26.9602 18.0053 23.9637ZM75.2013 75.1571C70.4383 79.9175 64.7228 83.152 58.6641 84.8878L84.9372 58.6289C83.2006 64.6843 79.9642 70.3967 75.2013 75.1571Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <h2 className="card-front__heading">
                                            Voli
                                        </h2>
                                    </div>

                                    <div className="card-front__bt">
                                        <p className="card-front__text-view card-front__text-view--camping">
                                            Daftar!
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="card-back"
                                    style={{
                                        background:
                                            "-webkit-radial-gradient(circle, hsla(58, 100%, 68%, 1) 0%, hsla(33, 100%, 53%, 1) 100%)",
                                    }}
                                >
                                    <img
                                        className="w-full"
                                        src={LogoCardUlympicPNG}
                                        alt="Logo Card Ulympic"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="inside-page">
                            <div className="inside-page__container">
                                <h3 className="inside-page__heading inside-page__heading--camping">
                                    Voli
                                </h3>
                                <p className="inside-page__text">
                                    Daftar dan spike bola menuju juara di
                                    Ulympic!
                                </p>
                                <a
                                    href="/rangkaian/ulympic/voli"
                                    className="inside-page__btn inside-page__btn--camping"
                                    target="_blank"
                                >
                                    Registrasi
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default UlympicMain;
