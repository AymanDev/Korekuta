package user

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func RegisterRoute(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "test",
	})
}
