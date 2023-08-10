import axios from "axios";

class statusController {
  async getStatus(req, res) {
    try {
      const { id } = req.params;

      console.log("Order number:" + " " + id);

      const apiUrl = `https://panel.remdesk.ru/api/1.0/status?key=11b3f9926add46236e3e7d7ad94e8469&uid=${id}&and_childs=1`;

      const response = await axios.get(apiUrl);
      const responseData = response.data;

      res.json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка" });
    }
  }
}

export default new statusController();
