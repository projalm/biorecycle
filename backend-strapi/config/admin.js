module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '574d2fbe2dc664877aff43f6d36264ee'),
  },
});
