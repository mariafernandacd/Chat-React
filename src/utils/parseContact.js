export const parseContact = data => {
    return {
        id: data.login.uuid,
        name: `${data.name.first} ${data.name.last}`,
        avatar: data.picture.large,
        carreer: data.email,
        messages: undefined
    };
}