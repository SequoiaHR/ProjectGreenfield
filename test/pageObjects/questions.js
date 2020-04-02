import { root } from './index';

export const getQuestionsTitle = async () => {
  const app = await root();
  return await app.$eval('.questionsTitle', el => el.innerText);
}

// export const clickAddAnswer = async () => {
//   const app = await root();
//   return await app.evaluate(()=>{
//     let yes = []
//     let elements = document.getElementsByClassName("addAnswer")
//     for (let el of elements){
//       elements.click();
//     }
//   })
}