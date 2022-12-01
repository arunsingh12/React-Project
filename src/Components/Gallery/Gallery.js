import React from 'react';
import '../Gallery/Gallery.css';
import { GalleryCard } from './GalleryCard'

export const Gallery = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row pt-5">
            <GalleryCard  image='https://i.pinimg.com/originals/d1/84/fc/d184fcdad712024b38e9895de4c4c4a6.jpg' />
            <GalleryCard  image='https://cdn.diys.com/wp-content/uploads/2017/07/Water-colour-wall.jpg' />
            <GalleryCard  image='https://cdn.wonderfuldiy.com/wp-content/uploads/2016/01/Watercolor-on-walls.jpg' />
            <GalleryCard  image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wall-paint-ideas-hbx030116wellopener-kedigian-1660230093.jpg' />
            <GalleryCard  image='https://attentiontrust.org/wp-content/uploads/2019/09/Skin-White-Wall-Paint-Ideas-Wall-Design.jpg' />
            <GalleryCard  image='https://cdn-fastly.hometalk.com/media/2017/06/14/3891319/s-30-creative-painting-techniques-you-must-see.jpg?size=720x845&nocrop=1' />
               
               
            </div>
        </div>
    </>
  )
}
