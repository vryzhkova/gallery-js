import { getData } from "./getData.js";
import { renderGallery } from "./renderGallery.js";
import { renderPhoto } from "./renderPhoto.js";
import { authorization } from "./authorization.js";

const init = async ({ selectorGalleryWrapper, selectorPhotoWrapper, selectorAuthButton }) => {
    const galleryWrapper = document.querySelector(selectorGalleryWrapper);
    const photoWrapper = document.querySelector(selectorPhotoWrapper);
    const authButton = document.querySelector(selectorAuthButton);

    authorization(authButton);

    if(galleryWrapper) {
        const photos = await getData({ count: 30 });
        renderGallery(galleryWrapper, photos);
    }

    if(photoWrapper) {
        const url = new URL(location.href);
        const idPhoto = url.searchParams.get('photo');

        if(idPhoto) {
            const photo = await getData({ idPhoto });
            renderPhoto(photoWrapper, photo);
        }
    }
};

init({ selectorGalleryWrapper: '.gallery__wrapper', selectorPhotoWrapper: '.photo__wrapper', selectorAuthButton:  '.header__login-button'});