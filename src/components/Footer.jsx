// import React from 'react'

// export default function Footer() {
//   return (
//     <div style={{backgroundColor:'silver'}}>
//       @Copyright 2025. All rights reserved.
//     </div>
//   )
// }

// Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--footer-bg)',
      padding: '12px',
      textAlign: 'center',
      fontSize: '14px',
      color: '#666',
      marginTop: '40px',
      borderTop: '1px solid #ccc'
    }}>
      &copy; 2025 React Store. All rights reserved.
    </footer>
  );
}
