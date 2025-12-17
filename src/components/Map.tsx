import React from 'react';

const Map = () => {
  return (
    <div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.963453490367!2d106.92405570000001!3d10.83113235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31751f94f051178d%3A0x638be8afacce1a95!2sCTY%20TNHH%20GAS%20Hi%E1%BB%81n%20Ph%C3%A1t%20Vina!5e0!3m2!1svi!2s!4v1765620019425!5m2!1svi!2s'
        width='100%'
        height='450'
        style={{ border: 0 }}
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default Map;
