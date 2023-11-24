

const DynamicButton = ({ color, text }) => {
    return (
        <button
            style={{
                width: "100px",
                height: "50px",
                backgroundColor: color,
                border: "1px solid black", // Добавьте границу для проверки
            }}
        >
            {text}
        </button>
    );
};

export default DynamicButton