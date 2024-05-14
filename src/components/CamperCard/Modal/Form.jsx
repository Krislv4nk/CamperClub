import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import css from '../CamperCard.module.css';
export const Form = () => { 
    const [startDate, setStartDate] = useState(new Date());
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            date: '',
            comment: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Name is required")
                .min(3, "Name must contain at least 3 symbols")
                .max(15, "Name must contain no more than 15 symbols"),
            email: Yup.string()
                .required("Email is required"),
            date: Yup.date().required("Date is required"),
            comment: Yup.string(),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <div className={css.formWrapper}><h4 className={css.formTitle}>Book your campervan now</h4>
            <h6 className={css.formText}>Stay connected! We are always ready to help you.</h6>
            <form className={css.form} onSubmit={formik.handleSubmit}>
                <label className={css.label} htmlFor="name">Name</label>
                <input className={css.input}
                    id="name"
                    placeholder='name'
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div className={css.error}>{formik.errors.name}</div>
                ) : null}
                <label className={css.label} htmlFor="email">Email</label>
                <input className={css.input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className={css.error}>{formik.errors.email}</div>
                ) : null}
                <label className={css.label} htmlFor="date">Date</label>
                <input selected={startDate} onChange={(date) => setStartDate(date)} className={css.input} 
    
                    id="date"
                    placeholder='Booking date'
                    name="date"
                    type="date"
                    onBlur={formik.handleBlur}
                    value={formik.values.date}
                />
                {formik.touched.date && formik.errors.date ? (
                    <div>{formik.errors.date}</div>
                ) : null}
                <label className={css.label} htmlFor="comment">Comment</label>
                <textarea className={css.textarea}
                    id="comment"
                    name="comment"
                    placeholder='Comment'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.comment}
                />
                {formik.touched.comment && formik.errors.comment ? (
                    <div className={css.error}>{formik.errors.comment}</div>
                ) : null}
                <button className={css.formBtn} type="submit">Submit</button>
            </form>
        </div>
    )
}