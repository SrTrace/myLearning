import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button onClick={() => setValue((v) => v + 1)}>
                    +
                </button>
                <button onClick={() => setVisible(false)}>
                    hide
                </button>
                <HookCounter value={value}/>
                <Notification/>
            </div>
        );
    } else {
        return <button onClick={() => setVisible(true)}>show</button>
    }
};

const HookCounter = ({value}) => {

    useEffect(() => {
        // console.log('mount');
        // return () => console.log('clear');
    }, []);

    useEffect(() => {
        // console.log('update');
    });

    return <p>{value}</p>;
};

const Notification = ({note}) => {
    const [onScreen, setOnScreen] = useState(true);

    useEffect(()=> {
        const timeOut = setTimeout(()=>  {
            setOnScreen(false);
        },2500);
        return () => clearTimeout(timeOut);
    });

    return (
        <div>
            { onScreen && <p>Hello</p>}
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);