const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Group = () => {
    const subTitle = 'AIT-TR Programm';
    return (
        <div>
            <h1>Cohort46M-FS</h1>
            <h2>{subTitle} - {Math.round(Math.random() * 10)}</h2>
        </div>
    );
}

root.render(
    <div>
        <Group />
        <Group />
        <Group />
    </div>
);