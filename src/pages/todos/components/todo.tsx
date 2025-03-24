import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

export const Todo = ({ id, title }) => {
    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <Checkbox id={id} onChange={onChange}>{title}</Checkbox>
    );
};