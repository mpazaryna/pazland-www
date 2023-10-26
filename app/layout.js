import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'paz.land',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '64ff552876fbde0007df1be2' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production'
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `
          }}
        />
      <script id="sft-style-launcher" 
        data-callout-text="Welcome to the chatbot."
        data-callout-style="background-color: #FAFAD2; border-color: #FFD700; color: #000000;"
        data-callout-fade-in="5"
        data-callout-fade-out="15"
        data-button-style="background-color: #fa8243;"
        data-image-url="https://cdn.esnipe.com/chat-question-blue.png"
        data-image-style="border-radius: 50%; width: 100%;"
        src="https://voiceflow.seefusion.tech/style/launcher/build.js" 
        type="text/javascript" defer>
      </script> 
    </body>
    </html>
  )
}
