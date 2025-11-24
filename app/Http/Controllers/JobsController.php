<?php

namespace App\Http\Controllers;

use App\Models\Jobs;
use \Illuminate\Http\Request;
use Inertia\Inertia;

class JobsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {    
        //list jobs
        $jobs = Jobs::all();
        // $jobs1 = $jobs[1]->title;
        $jobs1 = $jobs[1];
        //create home view
        return Inertia::render("Jobs/Index" , [
            'jobs' => $jobs,
            "jobs1" => $jobs1
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //get job by id
        $jobID = Jobs::find($id);
        return Inertia::render("Jobs/Show" , [
            'job' => $jobID
        ]);


    }

    /**
     * Show the form for editing the specified resource.
     */
    public function update(Request $request, $id)
    {
        //edit job
        $jobs = new Jobs();
      //  dd($request->all());
        $selectedJOB = $jobs::findOrFail($id);
        //validate data
        $fields = $request->validate([
            'title' => ['required', 'string'],
            'salary' => ['required', 'integer'],
            'location' => ['required', 'string']
        ]);
      //  dd($fields);
         
        if($fields){
            Jobs::updateOrCreate(
                ['id' => $id],
                [
                    'title' => $fields['title'],
                    'salary' => $fields['salary'],
                    'location' => $fields['location']
                ]
            );
        }
        //update job
        $jobsQuery = $jobs::where('id', $id)->update($fields);

        return redirect()->route('jobs.index');
    
    
        //get data to edit
      //  $jobsData = $jobs::all();
       // return Inertia::render("Jobs/Edit");
    }

    /**
     * Update the specified resource in storage.
     */
    public function edit($id)
    {   
        $jobs = new Jobs();
        $selectedJOB = $jobs::findOrFail($id);
       // dd($selectedJOB);
        //update job
        // $jobsQuery1 = $jobs::where('id',5)->update(['location'=>'San Diego']);
        // // Example of updating multiple columns
        // $jobsQuery2 = Jobs::where('id', 1)->update([
        // 'location' => 'Valparaiso',
        // 'salary' => 'CLP 1,500,000'  ]);

        return Inertia::render("Jobs/Edit" , [
            'jobs' => $jobs::all(),
            'job'  => $selectedJOB
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Jobs $jobs)
    {
        //
    }
}
