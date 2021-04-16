export const handleInputChange = (event: any, cb: any) => {
    cb((prevState: any) => ({
        ...prevState,
        [event.target.id]: event.target.value,
    }));
};

export const handleDateChange = (date: any, dateString: string, id: string, cb: any) => {
    cb((prevState: any) => ({
        ...prevState,
        [id]: date,
    }));
};

export const handleChangeId = (value: any, id: string, cb: any) => {
    cb((prevState: any) => ({
        ...prevState,
        [id]: value,
    }));
};

export const handleCheckboxChange = (event: any, cb: any) => {
    cb((prevState: any) => ({
        ...prevState,
        [event.target.id]: event.target.checked,
    }));
};