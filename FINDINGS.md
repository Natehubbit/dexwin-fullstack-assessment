- Location: frontend/src/components/TaskBoard.tsx
- Status: observed
- Evidence: clearly item index from iterator is used as key in the component
- Impact: Low. It can work fine but when other components begin the share the same index values, could cause poor UI rendering
- Priority: Low
- Proposed solution: Use Task id not index
- Verification:
- Implementation notes: Change key={index} to key = {task.id}

- Location: frontend/src/components/TaskBoard.tsx
- Status: observed
- Evidence: When request to update task is made, ui state is not updated
- Impact: High. It can work fine but when other components begin the share the same index values, could cause poor UI rendering
- Priority: High
- Proposed solution: Update state when request is complete
- Verification: Clicking complete does not update ui until page is refreshed
- Implementation notes: Update state specific for ui change after request is successfull


- Location: frontend/src/components/TaskItem.tsx
- Status: observed
- Evidence: When task data changes, the component will not update with respective changes
- Impact: High
- Priority: High
- Proposed solution: Use useeffect to check for changes in component props and update UI accordingly
- Verification: Mark task as complete and you will notice no UI update
- Implementation notes: Use useeffect to set data state when props change

- Location: frontend/src/components/TaskItem.tsx
- Status: observed
- Evidence: When task data changes, the component will not update with respective changes
- Impact: High
- Priority: High
- Proposed solution: Use useeffect to check for changes in component props and update UI accordingly
- Verification: Mark task as complete and you will notice no UI update
- Implementation notes: Use useeffect to set data state when props change


- Location: frontend/src/App.tsx
- Status: observed
- Evidence: Requests to load project and tasks are called twice
- Impact: Medium
- Priority: Medium
- Proposed solution: Find ways to limit request calls
- Verification: Inspect network tab and see double requests made on each request
- Implementation notes: Check what is causing multiple rerenders, hence duplicate request calls

- Location: frontend/src/components/TaskBoard.tsx
- Status: observed
- Evidence: When projectId changes, tasks do not change
- Impact: High
- Priority: High
- Proposed solution: Make new request when projectId changes
- Verification: Clicking new project does not trigger task update
- Implementation notes: Pass projectId into useEffect to listen for changes

- Location: frontend/src/components/TaskItem.tsx
- Status: fixed
- Evidence: Task title is not displaying at all
- Impact: High
- Priority: High
- Proposed solution: Access correct field for task title in component.
- Verification: Every task has empty title
- Implementation notes: Reference task.title field for the component
