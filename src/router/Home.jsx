import bg from "../assets/bg.jpg";

export default function Home() {
    return (
        <>
            <section className="nes-container">
                <img style={{ maxWidth: "100%", height: "auto" }} src={bg} />
            </section>
            <section className="nes-container is-dark">

                <section className="message-list">
                    <section className="message -left">
                        <i className="nes-bcrikko"></i>
                        <div className="nes-balloon from-left is-dark">
                            <p>高雄有什麼好玩的呀</p>
                        </div>
                    </section>

                    <section className="message -right">
                        <div className="nes-balloon from-right is-dark">
                            <p>我也不知道趕快來查查吧</p>
                        </div>
                        <i className="nes-bcrikko"></i>
                    </section>
                </section>
            </section>
        </>
    )
}