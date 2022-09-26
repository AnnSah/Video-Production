import React from 'react';
import "./Photo.css";
import PhotoSection from './PhotoSection';

function Photo() {
    return (
        <div className="photo">
            <div className="photo__info">
                <h2>Our Photographer</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                    magnam id fuga cupiditate possimus earum expedita, nostrum
                    temporibus ab sit, fugit laudantium molestiae minus explicabo
                    pariatur ea inventore enim excepturi nostrum
                    temporibus ab sit, fugit laudantium molestiae minus explicabo
                    pariatur ea inventore enim excepturi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                    magnam id fuga cupiditate possimus earum expedita, nostrum
                    temporibus ab sit, fugit laudantium molestiae</p>
            </div>

            <div className="photo__section">
                <PhotoSection
                    src="https://images.unsplash.com/photo-1560279966-2d681f3d4dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    title="Drone Photograph"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                    magnam id fuga cupiditate possimus earum expedita, nostrum
                    temporibus ab sit, fugit laudantium molestiae minus explicabo
                    pariatur ea inventore enim excepturi nostrum
                    temporibus ab sit, fugit laudantium molestiae" />

                <PhotoSection
                    src="https://images.unsplash.com/photo-1586732711713-421a6cc95490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    title=" Studio Photograph"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                    magnam id fuga cupiditate possimus earum expedita, nostrum
                    temporibus ab sit, fugit laudantium molestiae minus explicabo
                    pariatur ea inventore enim excepturi nostrum
                    temporibus ab sit, fugit laudantium molestiae" />
            </div>

            <div className="photo__section">
                <PhotoSection
                    src="https://images.unsplash.com/photo-1542992804-34f8f4cb193b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    title="Product Photograph"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                    magnam id fuga cupiditate possimus earum expedita, nostrum
                    temporibus ab sit, fugit laudantium molestiae minus explicabo
                    pariatur ea inventore enim excepturi nostrum
                    temporibus ab sit, fugit laudantium molestiae" />

                <PhotoSection
                    src="https://images.unsplash.com/photo-1506072827631-0a116a6aec44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    title=" Wedding Photograph"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                    magnam id fuga cupiditate possimus earum expedita, nostrum
                    temporibus ab sit, fugit laudantium molestiae minus explicabo
                    pariatur ea inventore enim excepturi nostrum
                    temporibus ab sit, fugit laudantium molestiae" />


            </div>


        </div>
    )
}

export default Photo;