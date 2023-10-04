// Functional Component
const People = (props) => {
    // State declaration with Hook
    const [isMisal, setIsCoba] = React.useState(true);

    // Return Value with JSX
    return (
        <div>
            <p>Saya {props.name}, Mahasiswa {isMisal ? " Sistem Informasi" : " Fak. FTIB IT Telkom Surabaya"}!</p>
            <button
                onClick={() => {
                    // Change the state value
                    setIsCoba(false);
                }}
                disabled={!isMisal}
            >
                {isMisal ? "Cek Website Sistem Informasi disini!" : "https://is.ittelkom-sby.ac.id/"}
            </button>
        </div>
    );
}

// Functional Component
const Cafe = () => {
    return (
        <div>
            <People name="Raffi Elendiaz" />
            <People name="Justine Ramadhan" />
        </div>
    );
}

const myElement = <Cafe />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);