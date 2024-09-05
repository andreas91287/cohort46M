const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function CheckBox() {
    const [isChecked, setIsChecked] = React.useState(false);
    return (
        <div>
            <input
                onChange={() => setIsChecked(!isChecked)}
                type='checkbox'
                defaultChecked={isChecked}
            />
            <p>{isChecked ? 'checked' : 'unchecked'}</p>
        </div>
    );
}

root.render(<CheckBox />);