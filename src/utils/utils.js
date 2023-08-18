export const dateAdjustment = (time) => {
    let date = new Date(time * 1000);
    let correctTime = `${date.getDate()}/${
        date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    return correctTime.toString();
};
