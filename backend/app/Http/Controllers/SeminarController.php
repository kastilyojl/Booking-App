<?php

namespace App\Http\Controllers;

use App\Models\Seminar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class SeminarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $list_of_seminars = Seminar::all();

        return response()->json($list_of_seminars);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'topic' => 'required|string|max:255',
            'date' => 'required|date',
            'speaker' => 'required|string|max:255',
            'issuer' => 'required|string|max:255',
            'about_the_speaker' => 'required|string',
            'description' => 'required|string',
            'about_this_seminar' => 'required|string',
            'speaker_image' => 'required|image|mimes:jpg,png,jpeg|max:2048',
            'certificate_logo' => 'required|image|mimes:jpg,png,jpeg|max:2048',
        ]);

        if ($request->hasFile('speaker_image')) {
            $validated['speaker_image'] = $request->file('speaker_image')->store('images/speaker_images', 'public');
        }

        if ($request->hasFile('certificate_logo')) {
            $validated['certificate_logo'] = $request->file('certificate_logo')->store('images/certificate_logos', 'public');
        }

        $createdSeminar = Seminar::create($validated);

        return response()->json([
            'message' => 'Seminar created successfully!',
            'seminar' => $createdSeminar
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Seminar $seminar)
    {
        return response()->json([
            'message' => 'Selected Seminar',
            'seminar' => $seminar
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Seminar $seminar)
    {
        $validated = $request->validate([
            'topic' => 'required|string|max:255',
            'date' => 'required|date',
            'speaker' => 'required|string|max:255',
            'issuer' => 'required|string|max:255',
            'about_the_speaker' => 'required|string',
            'description' => 'required|string',
            'about_this_seminar' => 'required|string',
            'speaker_image' => 'nullable|image|mimes:jpg,png,jpeg|max:2048',
            'certificate_logo' => 'nullable|image|mimes:jpg,png,jpeg|max:2048',
        ]);

        if ($request->hasFile('speaker_image')) {
            if ($seminar->speaker_image) {
                $oldPath = 'images/speaker_images/' . basename($seminar->speaker_image);
                $archivePath = 'images/archived_images/' . basename($seminar->speaker_image);

                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->move($oldPath, $archivePath);
                }
            }
            $validated['speaker_image'] = $request->file('speaker_image')->store('images/speaker_images', 'public');
        } else {
            unset($validated['speaker_image']);
        }

        if ($request->hasFile('certificate_logo')) {
            if ($seminar->certificate_logo) {
                $oldPath = 'images/certificate_logos/' . basename($seminar->certificate_logo);
                $archivePath = 'images/archived_images/' . basename($seminar->certificate_logo);

                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->move($oldPath, $archivePath);
                }
            }
            $validated['certificate_logo'] = $request->file('certificate_logo')->store('images/certificate_logos', 'public');
        } else {
            unset($validated['certificate_logo']);
        }

        $seminar->update($validated);

        return response()->json([
            'message' => 'Seminar updated successfully. Old images archived.',
            'seminar' => $seminar
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Seminar $seminar)
    {
        $seminar->delete();

        return response()->json([
            'message' => 'Seminar Deleted.',
            'seminar' => $seminar
        ], 200);
    }
}
