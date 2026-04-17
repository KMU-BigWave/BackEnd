export const authController = {
  googleLogin(_req, res) {
    return res.status(501).json({
      success: false,
      error: {
        code: "NOT_IMPLEMENTED",
        message: "GET /auth/google/login 은 아직 구현 전입니다.",
      },
    });
  },
};

