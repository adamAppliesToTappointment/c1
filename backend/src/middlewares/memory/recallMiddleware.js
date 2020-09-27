export default function(memoryService) {
  return async function(req, res) {
    try {
      res.recalledValue = await memoryService.recall();
      res.json({
        success: true,
        recalledValue: res.recalledValue
      });
    } catch (error) {
      res.json({
        success: false,
        error
      });
    }
  };
}
