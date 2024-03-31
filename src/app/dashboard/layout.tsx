import React from 'react'

const DasboardLayout = ({
  children,
  analytics,
  chat,
  video
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  chat: React.ReactNode;
  video: React.ReactNode;
}) => {

  return (
    <>
      <article>
        {children}
      </article>
      <section>
        <aside>
          {analytics}
        </aside>
        <aside>
          {chat}
        </aside>
        <aside>
          {video}
        </aside>
      </section>
    </>
  )
}

export default DasboardLayout