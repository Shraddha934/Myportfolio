import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa'

const SocialIcons = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/',
      label: 'LinkedIn'
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/',
      label: 'Twitter'
    },
    {
      icon: <FaDribbble />,
      url: 'https://dribbble.com/',
      label: 'Dribbble'
    }
  ]

  return (
    <div className="social-icons">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="social-icon"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialIcons