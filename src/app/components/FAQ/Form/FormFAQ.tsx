'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";

const FormFaq = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    role: '',
    email: '',
    phnumber: '',
    Message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ''
    )
    setIsFormValid(isValid)
  }, [formData])
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const reset = () => {
    formData.fullname = ''
    formData.role = ''
    formData.email = ''
    formData.phnumber = ''
    formData.Message = ''
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoader(true)

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        Name: formData.fullname,
        LastName: formData.role,
        Email: formData.email,
        PhoneNo: formData.phnumber,
        Message: formData.Message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true)
          setShowThanks(true)
          reset()

          setTimeout(() => {
            setShowThanks(false)
          }, 5000)
        }

        reset()
      })
      .catch((error) => {
        setLoader(false)
        console.log(error.message)
      })
  }
  return (
    <section id='formfaq'>
      <div className="flex items-center mb-6">
      <h3 className="font-semibold text-black flex gap-3">
        <Icon icon="fluent-color:chat-bubbles-question-24" className="w-10 h-10" />
        Buat Pertanyaan Baru (FAQ):
      </h3>
      </div>
          <div className="border rounded-md shadow-sm p-6 mt-4 bg-white">
          <form
            onSubmit={handleSubmit}
            className='flex flex-wrap w-full m-auto justify-between'>
            <div className='sm:flex gap-8 w-full'>
              <div className='mx-0 my-2.5 flex-1'>
                <label
                  htmlFor='fname'
                  className='pb-3 inline-block text-base'>
                  Nama Lengkap
                </label>
                <input
                  id='fname'
                  type='text'
                  name='fullname'
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder='Contoh: Dea Tayeb'
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
              <div className='mx-0 my-2.5 flex-1'>
                <label
                  htmlFor='role'
                  className='pb-3 inline-block text-base'>
                  Kategori Penanya
                </label>
                <input
                  id='role'
                  type='text'
                  name='role'
                  value={formData.role}
                  onChange={handleChange}
                  placeholder='(Siswa, Orang Tua, Masyarakat)'
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
            </div>
            <div className='sm:flex gap-8 w-full'>
              <div className='mx-0 my-2.5 flex-1'>
                <label htmlFor='email' className='pb-3 inline-block text-base'>
                  Alamat Email
                </label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='deatayeb@contoh.com'
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
              <div className='mx-0 my-2.5 flex-1'>
                <label
                  htmlFor='Phnumber'
                  className='pb-3 inline-block text-base'>
                  Nomor WhatsApp
                </label>
                <input
                  id='Phnumber'
                  type='tel'
                  name='phnumber'
                  placeholder='+62812 3456 7890'
                  value={formData.phnumber}
                  onChange={handleChange}
                  className='w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                />
              </div>
            </div>
            <div className='w-full mx-0 my-2.5 flex-1'>
              <label htmlFor='message' className='text-base inline-block'>
                Isi Pertanyaan
              </label>
              <textarea
                id='message'
                name='Message'
                value={formData.Message}
                onChange={handleChange}
                className='w-full mt-2 rounded-2xl px-5 py-3 border-solid border transition-all duration-500 focus:border-primary focus:outline-0'
                placeholder='Contoh: Apakah website ini resmi milik sekolah?'></textarea>
            </div>
            <div className='mx-0 my-2.5 w-full'>
              <button
                type='submit'
                disabled={!isFormValid || loader}
                className={`border leading-none px-6 text-lg font-medium py-4 rounded-full 
                    ${
                      !isFormValid || loader
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer'
                    }`}>
                Kirim
              </button>
            </div>
          </form>
          {showThanks && (
            <div className='text-white bg-primary rounded-full px-4 text-xs sm:text-sm mb-4.5 mt-1 absolute flex justify-center items-center gap-2'>
              <center>Terima kasih telah mengajukan pertanyaan! Kami akan segera menjawab pertanyaan Anda lewat email atau pesan WhatsApp.</center>
              <div className='w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent'></div>
            </div>
          )}
          </div>
    </section>
  )
}

export default FormFaq
