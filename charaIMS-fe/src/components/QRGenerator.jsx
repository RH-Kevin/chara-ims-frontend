import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRGenerator = ({serial}) => {

  return (
    <div>
        <QRCode value={serial} />
    </div>
  );
};

export default QRGenerator;