import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Question = (props) => {
  return (
    <>
      <div className="question-question Question">
        <span className="question-title">
          {props.title ?? (
            <Fragment>
              <span className="question-text1">Digitalisasi Koperasi</span>
            </Fragment>
          )}
        </span>
        <span className="question-description1">
          {props.description ?? (
            <Fragment>
              <span className="question-description2">
                <span>
                  Bantuan teknologi untuk pelayanan, administrasi, pelaporan dan
                  penerapan standar koperasi dengan teknologi informasi yang
                  mencakup sistem pengelolaan (back end) dan sistem antar
                  muka/user interface (front end) untuk koperasi melayani
                  anggotanya. Platform Damasta adalah platform koperasi yang
                  disediakan dan dikembangkan secara khusus oleh
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="question-text3">
                  PT Sinergitas Untuk Negeri
                </span>
                <span>
                  {' '}
                  dengan basis platform Jurnal Digital untuk jaringan Koperasi
                  Damasta Abhipraya Mandiri (Skd).
                </span>
                <br></br>
                <br></br>
                <span>
                  Platform Damasta inklusif, inovatif, dan menerapkan praktek
                  bisnis terbaik (kami menempatkan koperasi sebagai mitra bukan
                  vendor), biaya terjangkau dan mudah dikustomisasi dan
                  dikonfigurasi. Selain itu proses migrasi data yang sangat
                  simpel dan cepat. Dapat dioperasikan oleh siapa saja, dimana
                  saja, kapan saja.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .question-question {
            position: relative;
          }
          .question-title {
            font-size: 18px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
          }
          .question-description1 {
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .question-text1 {
            display: inline-block;
          }
          .question-description2 {
            display: inline-block;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .question-text3 {
            font-weight: 700;
          }
          @media (max-width: 767px) {
            .question-title {
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Question.defaultProps = {
  title: undefined,
  description: undefined,
}

Question.propTypes = {
  title: PropTypes.element,
  description: PropTypes.element,
}

export default Question
