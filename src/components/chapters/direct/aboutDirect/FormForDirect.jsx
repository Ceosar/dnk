import React, { useState } from 'react';
import { Form, Input, Button, Radio, Space } from 'antd';
import "./AboutDirect.css";
import axios from 'axios';


const FormForDirect = ({ handleCancel, handleOk }) => {
    const [contactType, setContactType] = useState('phone');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log('Received values:', values);
        // try {
        //     await axios.post('#', values);

        //     handleOk();
        // } catch (error) {
        //     console.error('Error during form submission:', error);
        // }
        handleOk();
    };

    const handleContactTypeChange = (e) => {
        setContactType(e.target.value);
    };

    const updateSubmitButton = () => {
        const formValues = form.getFieldsValue();
        const isDisabled = Object.values(formValues).some(value => !value);
        setIsSubmitDisabled(isDisabled);
    };

    return (
        <div className='form-for-direct_wrapper'>
            <Form
                name="directForm"
                onFinish={onFinish}
                layout={'vertical'}
                form={form}
            >
                <Form.Item
                    label="Фамилия"
                    name="surname"
                    rules={[{ required: true, message: 'Введите вашу фамилию!' }]}
                    onChange={updateSubmitButton}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Имя"
                    name="name"
                    rules={[{ required: true, message: 'Введите ваше имя!' }]}
                    onChange={updateSubmitButton}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Отчество"
                    name="middleName"
                    rules={[{ required: true, message: 'Введите ваше отчество!' }]}
                    onChange={updateSubmitButton}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Выберите тип контакта"
                    name="contactType"
                    initialValue={contactType}
                >
                    <Radio.Group onChange={handleContactTypeChange} buttonStyle="solid">
                        <Radio.Button value="phone">Телефон</Radio.Button>
                        <Radio.Button value="email">Почта</Radio.Button>
                        <Radio.Button value="telegram">Телеграм</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label={`Введите ${contactType === 'telegram' ? 'Telegram' : contactType === 'email' ? 'почту' : 'телефон'}`}
                    name="contactInfo"
                    rules={[{ required: true, message: `Введите ${contactType === 'telegram' ? 'Telegram' : contactType === 'email' ? 'почту' : 'телефон'}` }]}
                    onChange={updateSubmitButton}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button key="back" onClick={handleCancel}>
                            Назад
                        </Button>
                        <Button
                            key="submit"
                            type="primary"
                            onClick={onFinish}
                            htmlType='submit'
                            disabled={isSubmitDisabled}
                        >
                            Отправить
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
}

export default FormForDirect;
