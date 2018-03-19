const env = (process.env.NODE_ENV === 'development')
    ? 'local'
    : process.env.NODE_ENV

export default require(`./config.${env}`).default
