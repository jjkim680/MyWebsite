function getmangaimage(){
    const mangaId = 'b0b721ff-c388-4486-aa0f-c2b0bb321512';
    const coverFilename = 'a741289e-d524-4789-a76a-765d34a88aef.jpg';

    const coverUrl = `https://uploads.mangadex.org/covers/${mangaId}/${coverFilename}`;

    // Find the image element by its ID
    const imgElement = document.getElementById('frieren-cover-image');

    // Update its src attribute to the new URL
    imgElement.src = coverUrl;

}

document.addEventListener('DOMContentLoaded', getmangaimage);