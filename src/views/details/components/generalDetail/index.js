export default function GeneralDetail({ fine }) {
    return (
        <>
            <main style={{
                "display": "flex",
                "flex-direction": "column",
                "alignItems": "center",
                "justifyContent": "center"
            }}>
                <div>
                    <header>
                        <h2>Infracción general #{fine.id}</h2>
                    </header>
                    <p>
                        <b></b>
                    </p>
                </div>
            </main>
        </>
    );
}