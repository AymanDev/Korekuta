package user

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func AuthRoute(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "test",
	})
}
