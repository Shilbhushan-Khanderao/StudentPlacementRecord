package com.cdac.placement.controller;

import com.cdac.placement.model.Batch;
import com.cdac.placement.response.Response;
import com.cdac.placement.service.BatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:5173")
public class BatchController {
    @Autowired
    private BatchService batchService;

    //http://localhost:8080/batches
    @GetMapping(value = "/batches")
    public ResponseEntity<List<Batch>> getAllBatches(){
        try {
            List<Batch> batches = batchService.getAllBatches();
            if(batches.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(batches, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //http://localhost:8080/getBatch/1
    @GetMapping(value = "/getBatch/{batchid}")
    public ResponseEntity<?> getBatch(@PathVariable("batchid") Long batchid){
        try {
            Batch batch = batchService.getBatch(batchid);

            if (batch == null)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(batch,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //http://localhost:8080/addBatch
    @PostMapping(value = "/addBatch")
    public ResponseEntity<?> addBatch(@RequestBody Batch batch){
        if(batchService.addBatch(batch))
            return Response.success(batch);
        return Response.error("Batch addition failed.");
    }

    //http://localhost:8080/updateBatch
    @PutMapping(value = "/updateBatch")
    public ResponseEntity<?> updateBatch(@RequestBody Batch batch){
        if(batchService.updateBatch(batch))
            return Response.success(batch);
        return Response.error("Updation failed.");
    }
    //http://localhost:8080/deleteBatch?batchid=1
    @DeleteMapping(value = "/deleteBatch")
    public ResponseEntity<Map<String,String>> deleteBatch(@RequestParam("batchid") Long id){
        HashMap<String, String> hmap = new HashMap<>();

        if(batchService.deleteBatch(id))
            hmap.put("msg", "Deleted");
        else
            hmap.put("msg", "Failed");

        return ResponseEntity.ok(hmap);
    }
}
