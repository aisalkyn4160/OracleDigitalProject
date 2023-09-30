import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import {
  SectionLink,
  SectionTtl,
} from "../GeneralComponents/SectionTtlLinkStyles";
import { FaqBlock, QuestinsContainer, QuestionForm, QuestionSectionLink, QuestionSectionTtl, QuestionsSection } from "./QuestionsStyles";
import { FAQ } from "./FAQ";


export const Questions = () => {
  const [sendForm, setSendForm] = useState(false)
  const form = useRef()
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const regEx = '/\+996\s\d\d\d\s\d\d\s\d\d\s\d\d/gm'

  const sendEmail = () => {
    // e.preventDefault();

    emailjs.sendForm('service_xjibg29', 'template_k3tk9zr', form.current, 'Vw3XTC8OPNlPbRGMu')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
    reset( )
    setSendForm(true)
  };
  return (
    <QuestionsSection>
      <QuestinsContainer>
        <SectionTtl>Часто задаваемые вопросы</SectionTtl>
        <SectionLink>Quis pretium suspendisse.</SectionLink>
        <FaqBlock>
          <FAQ/>
        </FaqBlock>
        <QuestionForm id="contact" ref={form} onSubmit={handleSubmit(sendEmail)}>
          <QuestionSectionTtl>У вас остались вопросы?</QuestionSectionTtl>
          <QuestionSectionLink> Quis pretium  suspendisse.</QuestionSectionLink>
          <label htmlFor="phoneNumber">Ваш номер телефона</label>
          <input type="tel" id="phoneNumber" name='phoneNumber' placeholder="+996 700 123 345" {...register('userPhoneNumber', { pattern: {value: /\+996\s\d\d\d\s\d\d\s\d\d\s\d\d/gm, message: 'Заполните в формате +996 ХХХ ХХ ХХ ХХ!'}, required: {value: true, message: 'Поля не должна быть пустым!!'}})}/>
          {errors?.userPhoneNumber && <p>{errors?.userPhoneNumber.message}</p>}
          <label htmlFor="text">Задавайте вопрос</label>
          <textarea name="message" id="text" cols="3" rows="1" placeholder="Felis id tincidunt pulvar ac nunc ut nec?" {...register('userMessage', {required:{value: true, message: 'Поля для сообщений не должна быть пустым'}})}></textarea>
          {errors?.userMessage && <p>{errors?.userMessage.message}</p>}
          <button>Задать вопрос</button>
          {sendForm && <span>Успешно отправлено, с вами скоро свяжутся &#10004;</span>}
        </QuestionForm>
      </QuestinsContainer>
    </QuestionsSection>
  );
};
