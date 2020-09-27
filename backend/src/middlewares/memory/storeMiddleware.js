import fs from 'fs';
export default function(memoryService) {
  return async function(req, res, next) {
    try {
      await memoryService.store(req.body.valueToStore);
      res.json({ success: true });
    } catch (error) {
      res.json({
        success: false,
      });
    }
  };
}
