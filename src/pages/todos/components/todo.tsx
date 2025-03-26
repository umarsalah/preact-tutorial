import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import { useState } from 'preact/compat';

export const Todo = ({ id, title, completed }) => {
    const [isCompleted, setIsCompleted] = useState(completed);

    const onChange: CheckboxProps['onChange'] = (e) => {
        setIsCompleted(e.target.checked);
    };

    return (
        <Checkbox
            id={id}
            checked={isCompleted}
            onChange={onChange}
            className='todo-item'
        >
            {title}
        </Checkbox >
    );
};