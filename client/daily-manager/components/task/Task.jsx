import React from 'react';
import {
  taskCard,
  titleCard,
  titleContainer,
  descriptionCard,
  formatContainer,
  coursesBox,
  coursesItem,
  coursesItemLink,
  coursesItemBg,
  coursesItemTitle,
  coursesItemDateBox,
  coursesItemDate,
  coursesItemContent,
  coursesItemTools,
  card,
  cardContent,
  cardTitle,
  cardDescription,
  cardOptions,
  cardOption,
  cardItemBg,
  cardBody
} from './styles.module.scss';
 import './styles.module.scss';

const Task = ({removetask, title, description}) => {
  return (
    <>
{/* <div className={formatContainer}>
  <div className={coursesBox}>
    <div className={coursesItem}>
      <div className={coursesItemLink}>
        <div className={coursesItemContent}>
        <div className={coursesItemBg}></div>

        <div className={coursesItemTitle}>
        {title}
        </div>
        <div className={coursesItemDateBox}>
        {description}
          <span className={coursesItemDate}>
            04.06.2023
          </span>
        </div>
        </div>
      <div className={coursesItemTools}>
        <svg
          onClick={removetask}
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            d="M10 0C4.42857 0 0 4.42857 0 10C0 15.5714 4.42857 20 10 20C15.5714 20 20 15.5714 20 10C20 4.42857 15.5714 0 10 0ZM13.8571 15L10 11.1429L6.14286 15L5 13.8571L8.85714 10L5 6.14286L6.14286 5L10 8.85714L13.8571 5L15 6.14286L11.1429 10L15 13.8571L13.8571 15Z"
            fill="#775602"
            />
        </svg>
            </div>
      </div>
    </div>
</div>
</div> */}

<div className={card}>
      <div className={cardItemBg}></div>
      <div className={cardContent}>
        <div className={cardBody}>
          <h2 className={cardTitle}>{title}</h2>
        <p className={cardDescription}>{description}</p>

          </div>        
      <div className={cardOptions}>
        <div className={cardOption}>
        <svg
          onClick={removetask}
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            d="M10 0C4.42857 0 0 4.42857 0 10C0 15.5714 4.42857 20 10 20C15.5714 20 20 15.5714 20 10C20 4.42857 15.5714 0 10 0ZM13.8571 15L10 11.1429L6.14286 15L5 13.8571L8.85714 10L5 6.14286L6.14286 5L10 8.85714L13.8571 5L15 6.14286L11.1429 10L15 13.8571L13.8571 15Z"
            fill="#775602"
            />
        </svg>
        </div>
        {/* <button className={cardOption}>Edit</button> */}
        {/* <button className={cardOption}>Mark as Done</button> */}
      </div>
            </div>
    </div>

    </>



    // <div className={taskCard}>
    //   <div className={titleContainer}>
    //     <p className={titleCard}>{title}</p>
    //     <svg
    //       onClick={removetask}
    //       width="18"
    //       height="18"
    //       viewBox="0 0 20 20"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M10 0C4.42857 0 0 4.42857 0 10C0 15.5714 4.42857 20 10 20C15.5714 20 20 15.5714 20 10C20 4.42857 15.5714 0 10 0ZM13.8571 15L10 11.1429L6.14286 15L5 13.8571L8.85714 10L5 6.14286L6.14286 5L10 8.85714L13.8571 5L15 6.14286L11.1429 10L15 13.8571L13.8571 15Z"
    //         fill="#775602"
    //       />
    //     </svg>
    //   </div>
    //   <p className={descriptionCard}>{description}</p>
    // </div>
  );
};

export default Task;