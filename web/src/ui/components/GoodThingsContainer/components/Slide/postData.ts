import image1 from './images/e82c0cc3-94f0-4a09-8f43-fc5998b6fac5.jpg';
import image2 from './images/97aa196c-ce21-4445-89fe-f79949706265.jpg';
import image3 from './images/43d365a0-3098-4c29-a719-3914838d7759.jpg';

export interface post {
  src:string,
  description:string;
}

const postData:post[] = [
  {
    src:image1,
    description:'Organize your daily job enhance your life performance'
  },
  {
    src:image2,
    description:'Mark one activity as done makes your brain understands the power of doing.'
  },
  {
    src:image3,
    description:'Careful with missunderstanding the difference between a list of things and a list of desires.'
  }
];

export default postData;